import { defineComponent, onUpdated, ref } from 'vue'

export default defineComponent({
  setup(props, { slots }){
    const msg = ref('Hello World!')

    onUpdated(() => {
      console.log("Wrapper Updated!");
    });

    return ()=>(
      <div>
        <h1>In Wrapper component { msg.value }</h1>
        <input v-model={ msg.value } />
        { slots.test ? slots.test() : undefined }
      </div>
    )
  }
})
