import { useEffect } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Save } from 'lucide-react'
import { toast } from 'sonner'
import { getConfig, postConfig } from '@/api/config.ts'
import { Button } from '@/components/ui/button.tsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input'

const formScheme = z.object({
  FLARE_SOLVERR_URL: z.string(),
  PROXY: z.string(),
})

type formValues = z.infer<typeof formScheme>
const CONFIG_KEY = 'SystemConfig'

export function SystemConfigForm() {
  const form = useForm<formValues>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      FLARE_SOLVERR_URL: '',
      PROXY: '',
    },
  })

  const handleSubmit = async (data: formValues) => {
    const res = await postConfig(CONFIG_KEY, data as never)
    toast.success(res.message)
  }

  const { data } = useQuery({
    queryKey: [CONFIG_KEY],
    queryFn: async () => {
      const res = await getConfig<formValues>(CONFIG_KEY)
      return res.data
    },
    staleTime: 5 * 60 * 1000,
  })

  useEffect(() => {
    if (data) {
      form.reset(data)
    }
  }, [data, form])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='max-w-md space-y-4'
      >
        <FormField
          control={form.control}
          name='FLARE_SOLVERR_URL'
          render={({ field }) => (
            <FormItem>
              <FormLabel>FlareSolverr</FormLabel>
              <FormControl>
                <Input placeholder='输入FlareSolverr地址' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='PROXY'
          render={({ field }) => (
            <FormItem>
              <FormLabel>代理地址</FormLabel>
              <FormControl>
                <Input placeholder='输入代理地址' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>
          <Save />
          保存配置
        </Button>
      </form>
    </Form>
  )
}
