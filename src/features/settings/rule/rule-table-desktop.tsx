import { Pencil, Trash2 } from 'lucide-react'
import type { Rule } from '@/api/rule.ts'
import { Button } from '@/components/ui/button.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { ConfirmButton } from '@/components/confirm-button.tsx'

export function RuleTableDesktop({
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
    <div className='rounded-lg border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>板块</TableHead>
            <TableHead>分类</TableHead>
            <TableHead>正则</TableHead>
            <TableHead>下载器</TableHead>
            <TableHead>保存路径</TableHead>
            <TableHead>操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={9} className='text-center'>
                加载中...
              </TableCell>
            </TableRow>
          )}
          {data?.length === 0 && (
            <TableRow>
              <TableCell colSpan={9} className='text-center'>
                暂无数据
              </TableCell>
            </TableRow>
          )}
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.section}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.regex}</TableCell>
              <TableCell>{item.downloader}</TableCell>
              <TableCell>{item.save_path}</TableCell>
              <TableCell>
                <Button
                  variant='outline'
                  size='icon'
                  className='mr-2'
                  onClick={() => onEdit(item)}
                >
                  <Pencil className='h-4 w-4' />
                </Button>
                <ConfirmButton
                  variant='destructive'
                  title='删除规则'
                  description='删除后数据将无法恢复，是否确认？'
                  triggerText={<Trash2 className='h-4 w-4' />}
                  onConfirm={() => onDelete(item.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
