import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CardButton } from "./card-button";
import Link from "next/link";

interface Props {
  alt: string;
  url: string;
  title: string;
  id: string;
}

const NetworkCard = (data: Props) => {
  return (
    <Stack
      flexDirection={"column"}
      spacing={4}
      sx={{
        border: `1px solid black`,
        borderRadius: "10px",
        px: "20px",
        py: "20px",
        transform: "scale(0.9)",
      }}
      width={300}
    >
      <Stack
        flexDirection={"row"}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          alt={data.alt}
          src={data.url}
          width={53}
          height={53}
          style={{
            borderRadius: "50%", // Correct camelCase style
            transitionProperty: "transform",
            transitionTimingFunction: "ease",
            transitionDuration: "0.3s",
          }}
        />
        <Stack flexDirection={"column"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            textTransform={"capitalize"}
          >
            {data.title}
          </Typography>
          <Typography fontSize={"20px"}>{data.id}</Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CardButton>Staking</CardButton>
        <Link href={`/services/${data.title}`}>
          <CardButton>Service</CardButton>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NetworkCard;
