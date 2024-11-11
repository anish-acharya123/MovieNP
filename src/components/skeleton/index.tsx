import { Skeleton } from "@mui/material";

const css = { borderRadius: "2px", bgcolor: "grey.300" };
const SkeletonRec = ({ count }: { count: number }) => {
  console.log(count, "skeleton");
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "100%",
              height: {
                xs: "16rem",
                sm: "18rem",
                md: "20rem",
                lg: "22rem",
                xl: "24rem",
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
      ))}
    </>
  );
};

const SkeletonBanner = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "100%",
              height: {
                xs: "16rem",
                sm: "18rem",
                md: "20rem",
                lg: "22rem",
                xl: "24rem",
              },
            }}
          />
        </div>
      ))}
    </>
  );
};

const SkeletonCompany = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col mb-4">
          <Skeleton
            variant="rectangular"
            sx={{
              ...css,
              width: "100%",
              height: "14rem",
            }}
          />
        </div>
      ))}
    </>
  );
};

export { SkeletonRec, SkeletonBanner, SkeletonCompany };
