import CastHero from "components/app/CastHero";
import HeaderHero from "components/app/HeaderHero";
import MidHero from "components/app/MidHero";
import VideoHero from "components/app/VideosHero";
import AppFetchingWrapper from "components/widget/AppFetchWrapper";
import DashboardLayout from "layouts/DashboardLayout";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useInfoGetter } from "services/app-hook/getters/userInfoGetter";
import { apiFactory } from "services/apiFactory";

interface Props {}

const Dashboard: React.FC<Props> = (props: Props) => {
  const {} = props;
  const { userLoggedIn } = useInfoGetter();
  const [apiProperty, setApiProperty] = useState({
    isLoading: true,
    isError: false,
  });

  const {
    isLoading: trendLoading,
    error: trendIsError,
    isError: trendError,
    isFetching: trendFetching,
    refetch: trendRefresh,
    data: trendData,
  } = useQuery("trending", () => apiFactory.$_movie.getHeaderMovies());
  const extractedTrendData = (trendData || ({} as any)).data?.results || [];

  const {
    isLoading: topRatedLoading,
    error: topRatedIsError,
    isError: topRatedError,
    isFetching: topRatedFetching,
    refetch: topRatedRefresh,
    data: topRatedData,
  } = useQuery("top_rated", () => apiFactory.$_movie.getTopRatedMovies());
  const extractedTopRatedData = (topRatedData || ({} as any)).data?.results || [];

  const {
    isLoading: newArrivalLoading,
    error: newArrivalIsError,
    isError: newArrivalError,
    isFetching: newArrivalFetching,
    refetch: newArrivalRefresh,
    data: newArrivalData,
  } = useQuery("new_arrival", () => apiFactory.$_movie.getNewArrival());
  const extractednewArrivalData = (newArrivalData || ({} as any)).data?.results || [];

  const {
    isLoading: exclusiveLoading,
    error: exclusiveIsError,
    isError: nexclusiveError,
    isFetching: exclusiveFetching,
    refetch: exclusiveRefresh,
    data: exclusiveData,
  } = useQuery("feature_cast", () => apiFactory.$_movie.getExclusiveVideos());
  const extractednexclusiveData = (exclusiveData || ({} as any)).data?.results || [];

  const {
    isLoading: featuredCastLoading,
    error: featuredCastIsError,
    isError: featuredCastError,
    isFetching: featuredCastFetching,
    refetch: featuredCastRefresh,
    data: featuredCastData,
  } = useQuery("exclusive_videos", () => apiFactory.$_movie.getFeaturedCast());
  const extractednfeaturedCastData = (featuredCastData || ({} as any)).data?.results || [];



  const AllRefetch = ()=>{
    topRatedRefresh();
    newArrivalRefresh();
    exclusiveRefresh();
    featuredCastRefresh()
    trendRefresh()
  }

  return (
    <AppFetchingWrapper
      isLoading={topRatedLoading || newArrivalLoading || exclusiveLoading || featuredCastLoading || trendLoading}
      refresh={AllRefetch}
      isError={ topRatedError || newArrivalError || nexclusiveError || featuredCastError || trendError}>
      <DashboardLayout>
        <div>
            <HeaderHero movieData={extractedTrendData}/>
        </div>

        <div className="mx-[5%] lg:px-16 p-2 xs:p-3 sm:p-5 md:px-5">
          <MidHero extractedTopRatedData={extractedTopRatedData} header="Top Rated"/>
           <MidHero extractedTopRatedData={extractednewArrivalData} header="New Arrival"/>
          <VideoHero extractedTopRatedData={[...extractednexclusiveData].reverse()} header="Exclusive Videos"/>
          <CastHero extractedTopRatedData={extractednfeaturedCastData} header="Featured Casts"/>
        </div>
      </DashboardLayout>
    </AppFetchingWrapper>
  );
};

export default Dashboard;
