export interface ITransport {
  id: string,
  category: 'truck' | 'special' | 'passenger',
  driver: {
    name: string,
    phone_number: string,
  },
  coordinate: {
    longitude: number,
    latitude: number,
  }
}