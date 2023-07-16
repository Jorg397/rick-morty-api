import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class Episodes_apiService {
  private charactersApiUrl = 'https://rickandmortyapi.com/api/episode'

  async getAllEpisodes(): Promise<any> {
    const response = await axios(this.charactersApiUrl)
    return response
  }

  async getEpisodeById(id: number): Promise<any> {
    const response = await axios(`${this.charactersApiUrl}/${id}`)
    return response
  }

  async getMultipleEpisodes(ids: number[]): Promise<any> {
    const response = await axios(`${this.charactersApiUrl}/${ids.join(',')}`)
    return response
  }
}
