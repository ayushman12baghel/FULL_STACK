import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const initURL =
    "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let Hot_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let Cold_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let Rain_URL =
    "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? Rain_URL
                : info.temp > 15
                ? Hot_URL
                : Cold_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <>
                {info.city}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </>
            </Typography>
            <Typography
              component={"span"}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <div>City = {info.city}</div>
              <div>Temperature = {info.temp}&deg;C</div>
              <div>Minimum = {info.tempMin}&deg;C</div>
              <div>Maximum = {info.tempMax}&deg;C</div>
              <div>Humidity = {info.humidity}&deg;C</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
