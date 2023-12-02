import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardCss = () => {
    return ( // 부트스트랩 카드 컴포넌트 불러오기 
    // 상단 컴포넌트에서 CardCss 라는 컴포넌트를 원하는 자리에 넣어주기만 하면 됨
        <>
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default CardCss;