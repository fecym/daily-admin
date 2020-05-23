import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import store from '@/store'

export interface IConsumeState {
  address: any[]
}

@Module({ dynamic: true, store, name: 'consume' })
class Consume extends VuexModule implements IConsumeState {
  public address: any[] = []
  public provinces: any[] = []

  @Action({ commit: 'SET_ADDRESS' })
  public modifyAddress(address: IConsumeState['address']) {
    return address
  }

  @Action({ commit: 'SET_PROVINCES' })
  public modifyProvinces(address: IConsumeState['address']) {
    return address
  }

  @Mutation
  private SET_ADDRESS(address: IConsumeState['address']) {
    this.address = address
  }

  // 省份
  @Mutation
  private SET_PROVINCES(address: IConsumeState['address']) {
    this.provinces = address
  }
}

export const ConsumeMoudle = getModule(Consume)
