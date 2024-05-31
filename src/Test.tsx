import { defineComponent, onUpdated } from 'vue'
import WrapperComponent from './WrapperComponent'

export default defineComponent({
  setup(props, { slots }){

    onUpdated(() => {
      console.log("Test Updated!");
    })

    return ()=>(
      <div>
        <h1>Test</h1>
      </div>
    )
  }
})


