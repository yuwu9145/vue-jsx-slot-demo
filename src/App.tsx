import { defineComponent } from 'vue'
import WrapperComponent from './WrapperComponent'
import Test from './Test'

export default defineComponent({
  setup(props, { slots }){
    return ()=>(
      <div>
        <WrapperComponent>
          {{
            test: () => {
              return <Test
                // Comment out following line, Test component won't trigger update hook
                // No "Test Updated!" in console log 
                v-slots={ {} }
              />
            }
          }}
        </WrapperComponent>
      </div>
    )
  }
})


