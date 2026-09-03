import FormInput from "./form-input";

export default function FormMinMaxInput() {
    return (
        <>

            <label

                className="text-xs font-label uppercase font-bold tracking-widest text-primary col-span-2 "  >
                Age Criteria <span className="text-destructive">*</span></label> 

                 <FormInput
                                                            type="number"
                                                            name="minimum_players"
                                                            labelRequired
                                                            label="Minimum Players"
                                                            className="w-full border-1 border-zinc-300"
                                                        />
                                                        <FormInput
                                                            type="number"
                                                            name="maximum_players"
                                                            labelRequired
                                                            label="Maximum Players"
                                                            className="w-full border-1 border-zinc-300"
      />
 </>                                                      
    )
}