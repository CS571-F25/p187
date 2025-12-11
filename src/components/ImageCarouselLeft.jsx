import { Card} from "react-bootstrap";

const ImageCarouselLeft = () => {

    return( <Card style={{backgroundColor: 'black'}}>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BYTA0OTU5MTItZGU2YS00ZWEzLWFiMGUtNzU1MDRhY2JhZGRjXkEyXkFqcGc@._V1_QL75_UX404_.jpg"} alt={"Left image 1"} rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BNjZmYzBhOTgtM2Q0MC00ZTlkLWJjYmUtZjEyMGZhZDMxZTNjXkEyXkFqcGc@._V1_QL75_UX328_.jpg"} alt={"Left image 2"} rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BZDhjMGE1M2QtMjJmYS00OWEyLTgxODMtZmU1ZjQzZjVhNWM5XkEyXkFqcGc@._V1_QL75_UX404_.jpg"} alt={"Left image 3"}  rounded={true}/>
        </Card>
        <Card style={{marginBottom: 5}}>
            <Card.Img src={"https://m.media-amazon.com/images/M/MV5BMTE0OGYwNjgtYTU2Ni00ZDBjLTk0MjUtNDY0NTY4YWEyYjMxXkEyXkFqcGc@._V1_QL75_UX405_.jpg"} alt={"Left image 4"}  rounded={true}/>
        </Card>
    </Card>)
    
};

export default ImageCarouselLeft;