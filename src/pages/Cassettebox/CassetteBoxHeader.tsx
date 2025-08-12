import './CassetteBoxHeader.css';
import {useNavigate} from 'react-router-dom';

const CassetteBoxHeader = () => {
const navigate = useNavigate();
  
  return (
    <footer className="cassettebox-header">
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </footer>
  );
};

export default CassetteBoxHeader;
