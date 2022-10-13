import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

export const Profile = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "90px 0",
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "rgb(0, 30, 60)",
        }}>
            <Grid sx={{flexGrow: 1}} container spacing={3}>
                <Grid item sx={{
                    m: "0 Auto",
                }}>
                    <CardMedia
                        component="img"
                        sx={{
                            maxWidth: 300,
                            borderRadius: 90,
                            boxShadow: "0 0 10px #3399ff",
                            ml: 2,
                            "@media screen and (max-width: 420px)": {
                                maxWidth: 200,
                            },
                        }}
                        image="/static/images/profile/ProfileImage.jpg"
                        alt="Profile Image"
                    />
                </Grid>
                <Grid item sx={{
                    m: "0 Auto",
                }}>
                    <Box sx={{
                        mr: 1,
                        "@media screen and (max-width: 550px)": {
                            ml: 4,
                            mr: 4,
                        },
                    }}>
                        <Typography
                            component="h1"
                            sx={{
                                color: "#3399ff",
                                fontSize: 32,
                                fontWeight: "Prime",
                                ml: 2,
                            }}>
                            Profile
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                color: "#B2BAC2",
                                fontSize: 16,
                                fontWeight: "Light",
                            }}>
                            ー プロフィール ー
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                color: "#fff",
                                fontSize: 30,
                                fontWeight: "normal",
                                mt: 5,
                                "@media screen and (max-width: 550px)": {
                                    fontSize: 20,
                                },
                                "@media screen and (max-width: 300px)": {
                                    fontSize: 15,
                                },
                            }}>
                            島田匠悟（シマダショウゴ）
                        </Typography>
                        <Typography
                            component="p"
                            sx={{
                                color: "#fff",
                                fontSize: 18,
                                fontWeight: "normal",
                                mt: 5,
                                p: "0 5",
                                "@media screen and (max-width: 550px)": {
                                    fontSize: 15,
                                },
                            }}>
                            東京都立大学大学院 システムデザイン研究科 情報科学域 <br/>
                            博士前期課程1年
                            <Link
                                sx={{
                                    color: "#99ff33",
                                    textDecoration: "none",
                                    ml: 1,
                                    ":hover": {color: "#3399ff", cursor: "pointer"},
                                }}
                                href="https://www.tmu.ac.jp/stafflist/data/na/677.html"
                                target="_blank"
                            >西内
                            </Link> 研究室 &
                            <Link
                                sx={{
                                    color: "#99ff33",
                                    textDecoration: "none",
                                    ml: 1,
                                    ":hover": {color: "#3399ff", cursor: "pointer"},
                                }}
                                href="https://www.tmu.ac.jp/stafflist/data/alphabet/17010.html"
                                target="_blank"
                            >ヤェム
                            </Link> 研究室 所属 <br/><br/>
                            生まれ：1999年 神奈川県
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}