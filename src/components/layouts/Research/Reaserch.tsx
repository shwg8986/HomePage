import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {ResearchWords} from "./Info";
import {ResearchDetailSlide} from "./ResearchDetailSlide";

const words: string[] = [...ResearchWords]
export const Research = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "50px 0",
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "snow",
        }}>
            <Box sx={{m: "0 9%"}}>
                <Typography
                    component="h1"
                    sx={{
                        color: "#ab0f50",
                        fontSize: 30,
                        fontWeight: "Prime",
                        ml: 1.5,
                    }}>
                    Research Contents
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 12,
                        mb: 5,
                    }}>
                    ー 研究内容 ー
                </Typography>
            </Box>
            <Box sx={{
                width: "900px",
                m: "0 auto",
                mt: 9,
                mb: 9,
                p: 1,
                boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .2)",

                "@media screen and (max-width: 1000px)": {
                    width: "90%",
                    mt: 8,
                },
            }}>
                <ResearchDetailSlide/>
            </Box>
            <Container>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: 22,
                }}>
                    研究キーワード
                </Typography>

                <Grid container>
                    <Grid item sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        {words.map((word) => (
                            <Card key={word} sx={{
                                width: 150,
                                height: 50,
                                m: "0 5px 10px 5px",
                                borderRadius: 90,
                                textAlign: "center",
                            }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: 16,
                                    }}>
                                        {word}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>


    )
}