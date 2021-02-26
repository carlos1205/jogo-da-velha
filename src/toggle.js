import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <FormGroup>
      <FormControlLabel
        label="Ascendente"
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Descendente"
      />
    </FormGroup>
  );
}