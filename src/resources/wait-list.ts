import { AxiosInstance } from 'axios';

import { WaitListAttributes } from '../types/attributes';
import { AttendeeModel, PreferenceModel } from '../types/models';
import { IncludableParameters, WaitListParameters, WaitListUrlParameters } from '../types/parameters';
import { WaitListRelationship } from '../types/relationships';
import { WaitListResource } from '../types/resources';

export default class WaitList implements WaitListResource {
  protected attributes: WaitListAttributes;
  protected client: AxiosInstance;
  protected parameters: WaitListUrlParameters;
  protected relationships: WaitListRelationship;

  constructor(client: AxiosInstance) {
    this.attributes = {};
    this.client = client;
    this.parameters = {};
    this.relationships = {};
  }

  public async add(): Promise<any> {
    return await this.client.post('requests', this.params());
  }

  public at(location: number | string): this {
    this.relationships.location = location;

    return this;
  }

  public belonging(client: number | string): this {
    this.parameters.client = client;

    return this;
  }

  public async find(list: number | string): Promise<any> {
    const params: IncludableParameters = {};
    const { client, include } = this.parameters;

    if (include) {
      params.include = include;
    }

    return await this.client.get(`clients/${client}/requests/${list}`, { params });
  }

  public for(attendee: AttendeeModel): this {
    this.relationships.attendee = attendee;

    return this;
  }

  public include(includes: string): this {
    this.parameters.include = includes;

    return this;
  }

  public prefers(preferences: PreferenceModel | PreferenceModel[]): this {
    this.relationships.preferences = Array.isArray(preferences) ? preferences : [preferences];

    return this;
  }

  public provided(notes: string): this {
    this.attributes.notes = notes;

    return this;
  }

  public async remove(list: number | string): Promise<any> {
    const { client } = this.parameters;

    return await this.client.delete(`clients/${client}/requests/${list}`);
  }

  public seeking(service: number | string): this {
    this.relationships.service = service;

    return this;
  }

  public async update(list: number | string): Promise<any> {
    //
  }

  public with(user: number | string): this {
    this.relationships.user = user;

    return this;
  }

  protected params(): WaitListParameters {
    const attendee = (this.relationships.attendee as AttendeeModel).transform();
    const preferences = (this.relationships.preferences as PreferenceModel[]).map(
      (preference: PreferenceModel): object => {
        return preference.transform();
      },
    );

    const params: WaitListParameters = {
      data: {
        attributes: {},
        relationships: {
          client: {
            data: {
              ...attendee,
              type: 'clients',
            },
          },
          location: {
            data: {
              id: String(this.relationships.location),
              type: 'locations',
            },
          },
          preferences: {
            data: preferences,
          },
          service: {
            data: {
              id: String(this.relationships.service),
              type: 'services',
            },
          },
        },
        type: 'requests',
      },
    };

    if (this.attributes.notes) {
      params.data.attributes.details = this.attributes.notes;
    }

    if (this.relationships.user) {
      params.data.relationships.user = {
        data: {
          id: String(this.relationships.user),
          type: 'users',
        },
      };
    }

    return params;
  }
}
