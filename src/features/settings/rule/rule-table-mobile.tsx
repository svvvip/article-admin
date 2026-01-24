import { Pencil, Trash2 } from 'lucide-react'
import type { Rule } from '@/api/rule.ts'
import { Button } from '@/components/ui/button.tsx'
import { Card, CardContent, CardFooter } from '@/components/ui/card.tsx'
import { ConfirmButton } from '@/components/confirm-button.tsx'
import { EmptyState } from '@/components/empty.tsx'
import { Loading } from '@/components/loading.tsx'

export function RuleTableMobile({
  data,
  onEdit,
  onDelete,
  isLoading,
}: {
  data?: Rule[]
  onEdit: (rule: Rule) => void
  onDelete: (id: number) => void
  isLoading: boolean
}) {
  return (
    <div className='space-y-2'>
      {isLoading && <Loading />}
      {data?.length === 0 && <EmptyState />}
      {data?.map((rule: Rule) => (
        <Card className='w-full max-w-sm' key={rule.id}>
          <CardContent>
            <dl className='space-y-3'>
              <div className='flex justify-between'>
                <dt className='text-sm text-muted-foreground'>板块</dt>
                <dd className='text-sm'>{rule.section}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-sm text-muted-foreground'>分类</dt>
                <dd className='text-sm'>{rule.category}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-sm text-muted-foreground'>正则</dt>
                <dd className='text-sm'>{rule.regex}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-sm text-muted-foreground'>下载器</dt>
                <dd className='text-sm'>{rule.downloader}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-sm text-muted-foreground'>保存路径</dt>
                <dd className='text-sm'>{rule.save_path}</dd>
              </div>
            </dl>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Button variant='outline' size='icon' onClick={() => onEdit(rule)}>
              <Pencil className='h-4 w-4' />
            </Button>
            <ConfirmButton
              variant='outline'
              className='text-destructive'
              title='删除规则'
              description='删除后数据将无法恢复，是否确认？'
              triggerText={<Trash2 className='h-4 w-4' />}
              onConfirm={() => onDelete(rule.id)}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
