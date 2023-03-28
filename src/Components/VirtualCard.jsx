import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCard, getGithubUserInfo } from '../helpers/api';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function VirtualCard() {
  const [card, setCard] = useState({
    name: '',
    linkedinURL: '',
    githubURL: ''
  })
  const [githubInfo, setGithubInfo] = useState({
    login: "DanielDaher",
    id: 80550993,
    node_id: "MDQ6VXNlcjgwNTUwOTkz",
    avatar_url: "https://avatars.githubusercontent.com/u/80550993?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/DanielDaher",
    html_url: "https://github.com/DanielDaher",
    followers_url: "https://api.github.com/users/DanielDaher/followers",
    following_url: "https://api.github.com/users/DanielDaher/following%7B/other_user%7D",
    gists_url: "https://api.github.com/users/DanielDaher/gists%7B/gist_id%7D",
    starred_url: "https://api.github.com/users/DanielDaher/starred%7B/owner%7D%7B/repo%7D",
    subscriptions_url: "https://api.github.com/users/DanielDaher/subscriptions",
    organizations_url: "https://api.github.com/users/DanielDaher/orgs",
    repos_url: "https://api.github.com/users/DanielDaher/repos",
    events_url: "https://api.github.com/users/DanielDaher/events%7B/privacy%7D",
    received_events_url: "https://api.github.com/users/DanielDaher/received_events",
    type: "User",
    site_admin: false,
    name: "Daniel Daher",
    company: null,
    blog: "https://www.linkedin.com/in/daniel-daher-dev/",
    location: "Belo Horizonte - MG - Brasil",
    email: null,
    hireable: null,
    bio: "Desenvolvedor Full Stack JR com um ano de experiência.\r\nFormado pela Trybe.\r\nDisponível para trabalho",
    twitter_username: "daherfd",
    public_repos: 16,
    public_gists: 0,
    followers: 68,
    following: 70,
    created_at: "2021-03-12T22:07:48Z",
    updated_at: "2023-03-26T17:41:33Z"
  });
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const getCardFromBackend = async () => {
      const currentCard = await getCard(id);
      setCard(currentCard);
    }
    if (card.name === '') {
      getCardFromBackend();
    }
    // if (card.githubURL !== '') {
    //   getGithubLogin();
    // }
  }, [id, card]);

  const getGithubLogin = async () => {
    const [url, userName] = card.githubURL.split('.com/');
    const userInfo = await getGithubUserInfo(userName);
    console.log(userInfo)
    setGithubInfo(userInfo);
  }

  const ShowGithubInfo = () => {
    const { message, avatar_url, bio, location, twitter_username } = githubInfo
    const error = message;
    return (
      <>
        {!error &&
          (<div className='profile-card-github'>
            {avatar_url && <img src={avatar_url} alt="profile picture" width={'210px'} />}
            {bio && <p>{bio}</p>}
            {location && <p>{`Location: ${location}`}</p>}
            {twitter_username &&
              (<Link to={`https://twitter.com/${twitter_username}`} target="_blank">
                <button>Twitter</button>
              </Link>)
            }
          </div>)
        }
      </>
    )
  };

  const ShowLinkButtons = () => {
    const sitesNames = Object.keys(card)
      .filter(key => key.includes('URL'))
      .map(key => key.replace('URL', ''));

    return (
      sitesNames.map((site) => (
        <Link to={card[`${site}URL`]} target="_blank">
          <button>{site}</button>
        </Link>
      ))
    )
  };

  if (!card.name.length) return <Loading />

  return (
    <div className='card'>
      <h4>{`Hello, my name is ${card.name}`}</h4>
      < ShowGithubInfo />
      < ShowLinkButtons />
    </div>
  )
}

export default VirtualCard
