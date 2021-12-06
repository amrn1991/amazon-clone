import Layout from '../components/Layout';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import NextLink from "next/link"
import data from '../utils/data';

export default function Home() {
  return (
    <div>
      <Layout>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {data.products.map((prod) => (
            <Grid item md={4} key={prod.name}>
              <Card>
                <NextLink href={`/product/${prod.slug}`} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={prod.image}
                    title={prod.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{prod.name}</Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${prod.price}</Typography>
                  <Button color="primary" size="small">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}
