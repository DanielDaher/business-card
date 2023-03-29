import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCard, getGithubUserInfo } from '../helpers/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSquareTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import '../Styles/VirtualCard.css';

function VirtualCard() {
  const [card, setCard] = useState({
    name: '',
    linkedinURL: '',
    githubURL: ''
  })
  const [githubInfo, setGithubInfo] = useState('');
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    console.log('useEffect')
    const getCardFromBackend = async () => {
      const currentCard = await getCard(id);
      setCard(currentCard);
    }
    if (card?.name === '') {
      getCardFromBackend();
    }
    if (card?.githubURL !== '') {
      getGithubLogin();
    }
  }, [id, card]);

  const getGithubLogin = async () => {
    const [url, userName] = card?.githubURL.split('.com/');
    const userInfo = await getGithubUserInfo(userName);
    console.log(userInfo)
    setGithubInfo(userInfo);
  }

  const ShowGithubInfo = () => {
    const { message: githubError, avatar_url, bio, location } = githubInfo;
    return (
      <>
        {!githubError &&
          (<div className='profile-card-github'>
            {avatar_url && <img src={avatar_url} alt="profile picture" width={'190px'} />}
            {location && <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>}
            {bio && <p>{bio}</p>}
          </div>)
        }
      </>
    )
  };

  const ShowLinkButtons = () => {
    const { message: githubError, twitter_username, email } = githubInfo;

    const sitesNames = Object.keys(card)
      .filter(key => key.includes('URL'))
      .map(key => key.replace('URL', ''));

    return (
      <div className='profile-card-buttons'>
        {sitesNames.map((site) => (
          <Link to={card[`${site}URL`]} target="_blank" key={site}>
            <FontAwesomeIcon style={{ 'color': 'black' }} size='3x' icon={site === 'linkedin' ? faLinkedin : faGithub} />
          </Link>
        ))}
        {!githubError &&
          (
            <>
              {twitter_username &&
                <Link to={`https://twitter.com/${twitter_username}`} target="_blank">
                  <FontAwesomeIcon style={{ 'color': 'black' }} size='3x' icon={faSquareTwitter} />
                </Link>
              }
              {email &&
                <Link to={`mailto:${email}`} target="_blank">
                  <FontAwesomeIcon style={{ 'color': 'black' }} size='3x' icon={faEnvelope} />
                </Link>
              }
            </>
          )
        }
      </div>
    )
  };

  if (!card?.name.length) return <Loading />

  return (
    <div className='card'>
      <div className='profile-card-title'>
        <h4>Hello, my name is</h4>
        <h3>{card?.name}</h3>
      </div>
      < ShowGithubInfo />
      <hr />
      < ShowLinkButtons />
    </div>
  )
}

export default VirtualCard
