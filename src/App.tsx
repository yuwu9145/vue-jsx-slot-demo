import { defineComponent, onUpdated, ref } from 'vue'
import Test from './Test'

export default defineComponent({
  setup(props, { slots }){
    const msg = ref('Hello World!')

    onUpdated(() => {
      console.log("App Updated!");
    });
    return ()=>(
      <div>
        <h1>In Wrapper component { msg.value }</h1>
        <input v-model={ msg.value } />
        <Test
          // Comment out following line, Test component won't trigger update hook
          // No "Test Updated!" in console log 
          v-slots={ {} }
        />
      </div>
    )
  }
})


