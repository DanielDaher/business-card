import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCard } from '../helpers/api';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function VirtualCard() {
  const [card, setCard] = useState({
    name: '',
    linkedinURL: '',
    githubURL: ''
  })
  const [githubInfo, setGithubInfo] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getCardFromBackend = async () => {
      const currentCard = await getCard(id);
      setCard(currentCard);
    }
    if (card.name === '') {
      getCardFromBackend();
    }
    if (card.githubURL !== '') {
      getGithubLogin();
    }
  }, [id, card]);

  const getGithubLogin = async () => {
    const [ url, userName ] = card.githubURL.split('.com/');
    console.log(userName);
    const userInfo = await fetch(`https://api.github.com/users/${userName}`);
    const data = await userInfo.json()
    setGithubInfo(data);
  }

  const ShowGithubInfo = () => {
    return (
      <div>
        <img src={githubInfo.avatar_url} alt="profile picture" width={'250px'} />
        <p>{githubInfo.bio}</p>
      </div>
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
