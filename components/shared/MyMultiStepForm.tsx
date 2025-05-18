'use client'

import {
  useState
} from 'react'
import {
  useForm
} from 'react-hook-form'
import {
  Button
} from '@/components/ui/button'
import {
  Form
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  toast
} from 'sonner'
import {
  cn
} from '@/lib/utils'

export const MyMultiStepForm = () => {
  const [step, setStep] = useState<number>(0)
  const totalSteps = 3

  const form = useForm()

  const {
    handleSubmit,
    reset
  } = form

  const onSubmit = async (formData: unknown) => {
    if (step < totalSteps - 1) {
      setStep(step + 1)
    } else {
      console.log(formData)
      setStep(0)
      reset()

      toast.success("Form successfully submitted")
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="space-y-4">
          <div className="flex items-center justify-center">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                    index <= step ? "bg-primary" : "bg-primary/30",
                    index < step && "bg-primary"
                  )}
                />
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      "w-8 h-0.5",
                      index < step ? "bg-primary" : "bg-primary/30"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Multi form</CardTitle>
              <CardDescription>Current step {step + 1}</CardDescription>
            </CardHeader>
            <CardContent>
              
        {step === 0 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              <div className="border border-dashed rounded-md">
                      <div className="flex flex-col items-center justify-center h-[8rem]">
                        <h3 className="text-base font-semibold text-center">
                          No Inputs Added Yet!
                        </h3>
                        <p className="text-xs text-muted-foreground text-center">
                          Start building your form by adding input fields.
                        </p>
                      </div>
                    </div>
              
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="font-medium"
                  size="sm"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button type="submit" size="sm" className="font-medium">
                  {step as number === 2 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      

        {step === 1 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              <div className="border border-dashed rounded-md">
                      <div className="flex flex-col items-center justify-center h-[8rem]">
                        <h3 className="text-base font-semibold text-center">
                          No Inputs Added Yet!
                        </h3>
                        <p className="text-xs text-muted-foreground text-center">
                          Start building your form by adding input fields.
                        </p>
                      </div>
                    </div>
              
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="font-medium"
                  size="sm"
                  onClick={handleBack}
                  disabled={step as number === 0}
                >
                  Back
                </Button>
                <Button type="submit" size="sm" className="font-medium">
                  {step as number === 2 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      

        {step === 2 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              <div className="border border-dashed rounded-md">
                      <div className="flex flex-col items-center justify-center h-[8rem]">
                        <h3 className="text-base font-semibold text-center">
                          No Inputs Added Yet!
                        </h3>
                        <p className="text-xs text-muted-foreground text-center">
                          Start building your form by adding input fields.
                        </p>
                      </div>
                    </div>
              
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="font-medium"
                  size="sm"
                  onClick={handleBack}
                  disabled={step as number === 0}
                >
                  Back
                </Button>
                <Button type="submit" size="sm" className="font-medium">
                  {step === 2 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      
            </CardContent>
          </Card>
        </div>
  )
}