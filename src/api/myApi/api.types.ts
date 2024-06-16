export enum endpointEnum {
  MetodistPersonalCard = 'MetodistPersonalCard',
  TeacherPersonalCard = 'TeacherPersonalCard',
  requests = 'requests',
  table = 'table',
  list_ships = 'list_ships',
  detailed_info = 'detailed_info',
  map_info = 'map_info',
  download_file_requests = 'download_file_requests',
}

export interface IRequest {
  id?: number;
  is_ledocol?: boolean;
  name: string;
  imo: number;
  led_class: string;
  speed: number;

  date_begin: string;
  point_begin: string | number;

  date_end: string;
  point_end: string;
}

export interface ITable {
  id: number;
  id_request: number;

  is_ledocol: true;
  ship: number;
  ledocol: number;

  date_begin: string;
  point_begin: string;

  date_end: string;
  point_end: string;
}

export interface ShipTableType {
  id_karavan: number;
  id_provodki: number;
  speed: string;
  end_point: string;
  start_date: string;
  ledokol: string;
  finish_time_actual: string;
  ship_name: string;
  ice_class: string;
  start_point: string;
  karavan_point: string;
  finish_time_plan: string;
}
