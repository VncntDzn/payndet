export interface InitialstateProps {
  status: string;
  loading: boolean;
  error: null | string;
}

export interface TopAnimeProps extends InitialstateProps {
  data: [];
  upcoming: [];
  airing: [];
  movie: [];
  tv: [];
}

export interface CollectionAnimeProps extends InitialstateProps {
  data: [];
}

export interface ResourceAnimeProps extends InitialstateProps {
  anime: [];
}
