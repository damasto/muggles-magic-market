import { Box } from "@mui/material";
import NavBar from "../components/NavBar";

export default function NotFoundPage() {
    return (
        <>
            <NavBar />
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>We didn't find anything to show here. Invisible ink maybe? Try: "APARECIUM" !</h1>
            </Box>
        </>
    )
}