import '@dcloudio/uni-components/style/radio.css'
import { Radio } from '@dcloudio/uni-components'
import { UniNodeJSON } from '@dcloudio/uni-shared'
import { UniComponent } from './UniComponent'

export class UniRadio extends UniComponent {
  constructor(id: number, nodeJson: Partial<UniNodeJSON>) {
    super(id, 'uni-radio', Radio, nodeJson, '.uni-radio-wrapper')
  }
}
