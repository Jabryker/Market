import { FC } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { IPartnerCardProps } from "./PartnerCardFields.interface";

const PartnerCardFields: FC<IPartnerCardProps> = ({ logoUrl, description }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={logoUrl} alt={`${description} logo`} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PartnerCardFields;
