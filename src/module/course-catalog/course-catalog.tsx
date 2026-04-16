import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import CloseIcon from "../../assets/icons/close-icon";
import { BusinessIcon, DataScIcon, DesignIcon, DevelopmentIcon, MarketingIcon } from "../../assets/icons/filter-category-icon";
import { useCourseCatalogController } from "./use-course-catalog-controller";
import { CatalogCourseCard } from "../../components/catalog-course-card/catalog-course-card";

const categoryIconMap: Record<string, React.FC<{ isPressed?: boolean }>> = {
	"development": DevelopmentIcon,
	"design": DesignIcon,
	"business": BusinessIcon,
	"data-science": DataScIcon,
	"marketing": MarketingIcon,
};

export const CourseCatalog = () => {

	const {
		filterValues,
		setFilterValues,
		page,
		setPage,
		toggleFilter,
		pendingForCategories,
		categoriesListObj,
		pendingForTopics,
		topicsListObj,
		pendingForInstructors,
		instructorsListObj,
		pendingForCoursesList,
		coursesListObj,
	} = useCourseCatalogController();

	return (
		<Box
			component="article"
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: "90px",
				paddingX: "177px",
				paddingY: "64px",
				backgroundColor: "#F5F5F5",
			}}
		>
			<Stack direction="column" gap="32px" width="309px">
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography color="Filters" fontSize={40}>Filters</Typography>
					<Button
						onClick={() => setFilterValues({
							categories: [],
							topics: [],
							instructors: [],
						})}
						sx={{
							textTransform: "none",
							padding: 0,
						}}
					>
						<Typography color="#8A8A8A" fontSize={16}>Clear All Filters </Typography>
						<CloseIcon />
					</Button>
				</Stack>

				<Stack direction="column" gap="24px" >
					<Typography fontSize={18} color="#666666">Categories</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
						{!pendingForCategories && categoriesListObj!.data.map((category) => {
							const Icon = categoryIconMap[category.icon];
							return (
								<Button
									onClick={() => toggleFilter("categories", category.id)}
									sx={{
										borderRadius: "8px",
										padding: "8px 12px",
										display: "flex",
										flexDirection: "row",
										gap: "10px",
										backgroundColor: filterValues.categories.includes(category.id) ? "#1E169D" : "white",
										textTransform: "none",
									}}
								>
									{Icon && <Icon isPressed={filterValues.categories.includes(category.id)} />}
									<Typography
										color={filterValues.categories.includes(category.id) ? "white" : "#666666"}
										fontSize={16}
									>
										{category.name}
									</Typography>
								</Button>
							);
						})}
					</Box>
				</Stack>

				<Stack direction="column" gap="24px" >
					<Typography fontSize={18} color="#666666">Topics</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
						{!pendingForTopics && topicsListObj!.data.map((topic) => (
							<Button
								onClick={() => toggleFilter("topics", topic.id)}
								sx={{
									borderRadius: "8px",
									padding: "8px 12px",
									display: "flex",
									flexDirection: "row",
									gap: "10px",
									backgroundColor: filterValues.topics.includes(topic.id) ? "#1E169D" : "white",
									textTransform: "none",
								}}
							>
								<Typography
									color={filterValues.topics.includes(topic.id) ? "white" : "#666666"}
									fontSize={16}
								>
									{topic.name}
								</Typography>
							</Button>
						))}
					</Box>
				</Stack>

				<Stack direction="column" gap="24px" >
					<Typography fontSize={18} color="#666666">Instructor</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
						{!pendingForInstructors && instructorsListObj!.data.map((instructor) => (
							<Button
								onClick={() => toggleFilter("instructors", instructor.id)}
								sx={{
									borderRadius: "8px",
									padding: "8px 12px",
									display: "flex",
									flexDirection: "row",
									gap: "10px",
									backgroundColor: filterValues.instructors.includes(instructor.id) ? "#1E169D" : "white",
									textTransform: "none",
								}}
							>
								<Box
									sx={{
										borderRadius: "4px",
										width: "30px",
										height: "30px",
										backgroundImage: `url(${instructor.avatar})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								/>
								<Typography
									color={filterValues.instructors.includes(instructor.id) ? "white" : "#666666"}
									fontSize={16}
								>
									{instructor.name}
								</Typography>
							</Button>
						))}
					</Box>
				</Stack>

			</Stack>

			<Stack direction="column" gap="32px">
				<Stack direction="row" justifyContent="space-between" >
					<Typography color="#666666" fontSize={16}>
						Showing {coursesListObj ?
							`${coursesListObj.data.length} out of ${coursesListObj.meta.total}` : "? out of ?"}
					</Typography>
				</Stack>

				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "12px", width: "1167px" }}>
					{!pendingForCoursesList && coursesListObj!.data.map((course) => {
						const Icon = categoryIconMap[course.category.icon];
						return (
							<CatalogCourseCard courseDetails={course}>
								<Box
									sx={{
										borderRadius: "8px",
										padding: "8px 12px",
										display: "flex",
										flexDirection: "row",
										gap: "10px",
										backgroundColor: "#F5F5F5",
									}}
								>
									{Icon && <Icon isPressed={filterValues.categories.includes(course.category.id)} />}
									<Typography
										color={filterValues.categories.includes(course.category.id) ? "white" : "#666666"}
										fontSize={16}
									>
										{course.category.name}
									</Typography>
								</Box>
							</CatalogCourseCard>
						);
					}
					)}
				</Box>

				<Pagination
					page={page}
					onChange={(_, value) => setPage(value)}
					count={
						coursesListObj ?
							Math.ceil(coursesListObj?.meta.total / coursesListObj?.meta.perPage) : 1
					}
					shape="rounded"
				/>
			</Stack>
		</Box >
	);
};
