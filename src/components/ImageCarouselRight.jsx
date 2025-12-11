import { Card} from "react-bootstrap";

const ImageCarouselRight = () => {

    return( <Card style={{backgroundColor: 'black'}}>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BNTk2MTVkYzItODJlZC00YzM4LWI4OWEtNjMyZDdiMTVkYTgwXkEyXkFqcGc@._V1_QL75_UX328_.jpg"} rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BMTIyMjQ3ZGQtNTBkYy00MzQzLTg1MWMtNjc0YzEwNmM1ZjVhXkEyXkFqcGc@._V1_QL75_UX328_.jpg"} rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BM2M4Y2U1OWMtNDRlZi00MzY1LWE0Y2EtYmY4ODg5ZDQxOWEyXkEyXkFqcGc@._V1_QL75_UX405_.jpg"} rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BNWM4YjdmNWMtZDlkOC00N2NkLWJiZmEtMTcwZGZkZjM5MzU4XkEyXkFqcGc@._V1_QL75_UX389_.jpg"} rounded={true}/>
        </Card>  
    </Card>)
    
};

export default ImageCarouselRight;