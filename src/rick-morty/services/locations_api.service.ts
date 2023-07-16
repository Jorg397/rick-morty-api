import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class LocationsApiService {
  private charactersApiUrl = 'https://rickandmortyapi.com/api/location'

  async getAllLocations(): Promise<any> {
    const response = await axios(this.charactersApiUrl)
    return response
  }

  async getLocationById(id: number): Promise<any> {
    const response = await axios(`${this.charactersApiUrl}/${id}`)
    return response
  }

  async getMultipleLocations(ids: number[]): Promise<any> {
    const response = await axios(`${this.charactersApiUrl}/${ids.join(',')}`)
    return response
  }
}
