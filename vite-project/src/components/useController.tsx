/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, ComponentPropsWithoutRef } from "react"
import { Control, type FieldValues, type Path, Controller } from "react-hook-form"


interface ControlInputProp<TFieldValues extends FieldValues = FieldValues> extends ComponentPropsWithoutRef<"input"> {
    name: Path<TFieldValues>,
    id?: string,
    control: Control<TFieldValues>,
    required?: boolean,
    label?: string,
    placeholder?: string,
    clasName?: string,
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export const UseController = forwardRef<HTMLInputElement, ControlInputProp>(({ name, id, control, required, label, placeholder, clasName, onChange, ...prop }, ref) => {
    console.log("render")
    return <Controller
        name={name}
        control={control}
        {...prop}
        render={({ field }) => (
            <div>
                <label htmlFor={id}>
                    {label} {required && <span className="text-[red]">*</span>}
                </label>
                <input id={id} placeholder={placeholder} {...field} className={clasName} ref={ref}
                    onChange={(value) => {
                        field.onChange(value);
                        if (onChange) onChange(value);
                    }}
                />
            </div>
        )}
    />
})