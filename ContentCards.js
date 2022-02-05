import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { useStyles } from "./useStyles";

export function ContentCards({ cost }) {

  const [Raise, setRaise] = useState(false);

  let change = (a) => {
    setRaise(!Raise);
  };

  const classes = useStyles();

  const list_items = [" Single User", " 5GB Storge", "  Unlimited Public Projects", " Community Access", "  Unlimited Private Projects", "  Dedicated Phone Support", " Free Subdomain", "  Monthly Status Report"];
  const list = [];
  for (let i = 0; i < list_items.length; i++) {
    list.push(<li className="card_li">{cost[i] === 1 ? <CheckIcon /> : <ClearIcon />}{list_items[i]}</li>);
  }

  return (
    <Card sx={{ minWidth: 440, margin: 2 }} raised={Raise} onMouseEnter={change} onMouseLeave={change}>
      <CardContent>

        <div className="cards">

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            FREE
          </Typography>

          <Typography variant="h5" component="div">
            <b><span className="costing">${cost[8]}</span></b><sub>/month</sub>
          </Typography>

        </div>

        <hr />

        <Typography variant="body2">
          <ul className="card_ul">
            {list}
          </ul>
        </Typography>

      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" fullWidth className={classes.button}>BUTTON</Button>
      </CardActions>

    </Card>
  );
}
