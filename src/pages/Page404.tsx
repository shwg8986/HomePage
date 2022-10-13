import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {StyledButton} from "../components/ui-elements/StyledButton";

export const Page404 = () => {
    return (
        <>
            <Card sx={{
                maxWidth: 700,
                textAlign: "center",
                m: "100px Auto",
            }}>
                <CardMedia
                    component="img"
                    height="400"
                    image="/static/images/cards/Page404.png"
                    alt="404"
                />
                <CardContent sx={{
                    backgroundColor: "text.secondary",
                }}>
                    <Typography gutterBottom variant="h3" component="div" sx={{
                        p: "40px", color: "white"
                    }}>
                        ページが存在しません...
                    </Typography>
                    <Link to={`/`}>
                        <StyledButton>ホームに戻る</StyledButton>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
};
