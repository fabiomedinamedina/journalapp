import { Card, CardContent, Typography } from "@mui/material";

export const AddNewNoteCard = () => {
  return (
    <Card
      className='animate__animated animate__fadeInUp'
      sx={{
        backgroundColor: 'secondary.light',
        color: 'secondary.main',
        minWidth: '100%',
        px: 3, py: 2
      }}
    >
      <CardContent>
        <Typography variant="h3" fontWeight={700}>
          Agrega tu primera nota
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar tortor metus, quis bibendum.
        </Typography>
      </CardContent>
    </Card>
    
  );
};
