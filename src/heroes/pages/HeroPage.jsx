import styled from "@emotion/styled";
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SkillDisplay } from "../../ui/components/SkillDisplay";
import { HeroesContext } from "../context/HeroesContext";

export const HeroPage = () => {
	const { heroId } = useParams();

	const { isLoading, getHeroById } = useContext(HeroesContext);

	const hero = getHeroById(parseInt(heroId));

	const navigate = useNavigate();

	const onNavigateBack = () => {
		navigate(-1);
	};

	const CardActionArea = styled("div")(({ theme }) => ({
		display: "flex",
		justifyContent: "flex-start",
		flexDirection: "column",

		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
		},
	}));

	return (
		<>
			{!isLoading && (
				<Grid height={'100vh'} display={'flex'} alignItems={'center'}>
					<Card
						sx={{
							display: "flex",
							maxWidth: { xs: "95%", sm: "85%", md: "75%" },
							flexDirection: "column",
							margin: "2em auto",
							padding: "1em",
							
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="500"
								image={hero.images.lg}
								alt={hero.name}
								sx={{ maxWidth: "400px", borderRadius: "5px" }}
								className="col-4 animate__animated animate__fadeInLeft"
							/>

							<CardContent sx={{ minWidth: "300px" }}>
								<Typography variant="h3">{hero.name}</Typography>
								<List
									sx={{
										width: "100%",
										maxWidth: 360,
										bgcolor: "background.paper",
									}}
								>
									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay
													skillValue={hero.powerstats.intelligence}
												/>
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Intelligence" />
									</ListItem>

									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay skillValue={hero.powerstats.strength} />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Strength" />
									</ListItem>

									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay skillValue={hero.powerstats.speed} />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Speed" />
									</ListItem>

									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay skillValue={hero.powerstats.durability} />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Durability" />
									</ListItem>
									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay skillValue={hero.powerstats.power} />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Power" />
									</ListItem>
									<ListItem
										secondaryAction={
											<IconButton edge="end">
												<SkillDisplay skillValue={hero.powerstats.combat} />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar></Avatar>
										</ListItemAvatar>
										<ListItemText primary="Combat" />
									</ListItem>
								</List>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								className="btn btn-outline-primary"
								onClick={onNavigateBack}
							>
								Back...
							</Button>
						</CardActions>
					</Card>
				</Grid>
			)}
		</>
	);
};
