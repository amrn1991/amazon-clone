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
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home({products}) {
  return (
    <div>
      <Layout>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {products.map((prod) => (
            <Grid item md={4} key={prod.name}>
              <Card>
                <NextLink href={`/product/${prod.slug}`}>
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

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
