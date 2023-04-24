export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: Camera[];
}

export interface GetRoversResponse {
  rovers: Rover[];
}

export interface Camera {
  id:	number;
  name:	string;
  rover_id: number;
  full_name: string;
}
