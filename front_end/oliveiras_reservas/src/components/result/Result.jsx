import { Link } from "react-router-dom";
import "./result.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Result = ({ item }) => {

    return (
        <>
            <Link className="resultLink" to={`/hotels/${item._id}`}>
                <Card sx={{ maxWidth: 700 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.photos[0]}
                            alt="Capa Hotel"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" textAlign="justify">
                                <p>{item.description}</p><br></br>
                                <span > <b> Estrelas:</b> {item.stars} </span><br></br>
                                <span ><b>Nota:</b> {item.rating}</span><br></br>
                                <span ><b>Diária:</b> R$ {item.price} </span><br></br>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    )
}

export default Result