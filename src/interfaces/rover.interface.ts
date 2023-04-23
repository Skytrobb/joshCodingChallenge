export interface Rover {
  id: number;
  name: string;
  landing_date: Date;
  launch_date: Date;
  max_sol: number;
  max_date: Date;
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
