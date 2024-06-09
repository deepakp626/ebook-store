import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material"

const productsNameAndLinks = [
    {
        title: "product 1",
        src: ""
    },
    {
        title: "product 2",
        src: ""
    },
    {
        title: "product 3",
        src: ""
    },
    {
        title: "product 4",
        src: ""
    },
]

const Dashboard = () => {
    return (
        <>
            <Stack direction={"row"} sx={{ padding: "1rem", justifyContent: "space-around", gap: "2rem", overflow: "scroll", marginBottom: "1rem",scrollbarWidth:"thin"}}>
                {
                    productsNameAndLinks.map((item, index) => (
                        <Box key={index} sx={{ display: "grid", placeContent: "center", placeItems: "center", gap: '0.2rem' }}>
                            <Avatar
                                variant="rounded"
                                alt={item.title}
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography sx={{ fontSize: "1.2rem" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Stack>

            <Section />
        </>
    )
}


function Section() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: "center" }} >
                {year} Edition Modules
            </Typography>
            <BookCard />
        </>
    )
}

function BookCard() {
    return (
        <Card sx={{ maxWidth: "140px", border: "2px solid red" }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                </Typography>
                <Typography paragraph component="div">
                    $ 140
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>)
}




export default Dashboard