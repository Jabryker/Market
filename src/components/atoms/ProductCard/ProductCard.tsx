import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton,
  Typography,
  Box,
  Grid,
  TextField,
  Chip,
} from "@mui/material";
import { Grade } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { CustomShoppingCartIcon } from "../../../assets/images/cunstomIcons/CustomShoppingCartIcon";
import { addToCart } from "../../../store/slice/cartSlice";
import { Product, CartItem } from "./ProductCard.interface";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (quantity: number) => {
    const cartItem: CartItem = { product, quantity };
    dispatch(addToCart(cartItem));
  };

  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      setQuantity(value);
    }
  };

  // Рассчитываем скидку в процентах
  const discountPercentage = 30;

  return (
    <Card className="border border-gray-300 rounded-lg shadow-md">
      <CardContent>
        <Box className="flex items-center justify-between">
          <Box className="flex items-center">
            <Grid item xs={12}>
              {discountPercentage > 0 && (
                <Chip
                  label={`${discountPercentage}% скидка`}
                  className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-700 text-white rounded-sm px-2 py-1"
                />
              )}
            </Grid>
          </Box>
          <IconButton aria-label="Add to cart">
            <CustomShoppingCartIcon />
          </IconButton>
        </Box>
        <Link to={`/products/${product?.id}`}>
          <img
            src={product?.images[0]?.image}
            alt={product?.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <Box className="flex items-center">
          <Grade fontSize="small" color="primary" />
          <Typography variant="subtitle1" color="primary" className="ml-1">
            {/*{product?.rating}*/} rating
          </Typography>
        </Box>
        <Typography variant="h6" className="mb-4">
          {product?.name}
        </Typography>
        <Typography variant="subtitle1" className="text-amber-500 font-bold">
            ${product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
              fullWidth
            >
                -
            </Button>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Количество"
              type="number"
              InputProps={{
                inputProps: {
                  min: 1,
                  style: {
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  },
                },
              }}
              variant="outlined"
              size="small"
              fullWidth
              value={quantity}
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setQuantity(quantity + 1)}
              fullWidth
            >
                +
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className=""
              fullWidth
              onClick={() => handleAddToCart(quantity)}
              style={{ backgroundColor: "#FE9C08", color: "#fff",  borderRadius: "4px", transition: "background-color 0.3s" }}
            >
                Купить
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
