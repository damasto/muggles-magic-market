import { useScrollTrigger } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Box,
    TextField

  } from "@mui/material";

export default function SellingPage () {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const reviews = []

    console.log(title)
    
    return (
        <>
        <NavBar/>
            <Box>
            <TextField
        label="Product title"
        name="title"
        value={title}
        onChange={() => setTitle(title)}
        required
      />
            </Box>
        <Footer/>
        </>
    )
}