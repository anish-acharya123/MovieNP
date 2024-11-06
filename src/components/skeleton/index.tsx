import { Skeleton } from "@mui/material";

const SkeletonRec = () => {
  const css = { borderRadius: "2px", bgcolor: "grey.300" };

  return (
    <>
      {Array(12).fill(
        <div className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
           
              width: "100%",
              height: {
                xs: "16rem", // Height for extra-small screens
                sm: "18rem", // Height for small screens
                md: "20rem", // Height for medium screens
                lg: "22rem", // Height for large screens
                xl: "24rem", // Height for extra-large screens
              },
            }}
          />
          <div className="flex justify-between mt-2">
            <Skeleton
              variant="text"
              sx={{
                ...css,
                width: {
                  xs: "40%",
                  sm: "35%",
                  md: "30%",
                  lg: "25%",
                  xl: "20%",
                },
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                ...css,
                width: {
                  xs: "20%",
                  sm: "18%",
                  md: "15%",
                  lg: "12%",
                  xl: "10%",
                },
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SkeletonRec;
