/* eslint-disable no-unused-vars */
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Stage 3 Boutique</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="HOME" />
        <ListItemText primary="CATEGORIES" />
        <ListItemText primary="PRODUCTS" />
        {/* <ListItemText primary="About us" />
        <ListItemText primary="Contact us" /> */}
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}
