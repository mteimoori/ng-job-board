export interface JobFullDto {
  errno: number;
  error: string;
  body: JobDto[];
}

export interface JobDto {
  id: string;
  title: string;
  zip_code: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  counter: {
      messages_total: number;
      messages_unread: number;
  };
  is_awarded: boolean;
  categories:
      {
          id: string;
      }[];
  state: string;
  description: string;
  end_date: string;
  created_at: string;
}
