import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Plus, List, Check, ArrowDownRight, Trash, SquarePen, ListCheck, Sigma} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


const Home = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen  bg-gray-100">

  <Card className="w-lg">
    <CardHeader className="flex gap-2">
    <Input placeholder="Adicionar tarefa"></Input>
    <Button variant="default" className="cursor-pointer"> <Plus/> Cadastrar</Button> 
    </CardHeader>


    <CardContent className="flex  flex-col gap-2">
      <Separator className="mb-2" />

      <div className="flex gap-2">
      <Badge className="cursor-pointer" variant="default"><List/> Todas
      </Badge>
      <Badge className="cursor-pointer" variant="outline"><ArrowDownRight/> Não finalizadas
      </Badge>
      <Badge className="cursor-pointer" variant="outline"><Check/> Concluidas
      </Badge>
      </div>

      <div className="mt-4 border-b"> 

        <div className=" h-14 flex justify-between items-center border-t">
          <div className="bg-green-300 w-1 h-full"></div>
          <p className="flex-1 px-2 text-sm">Estudar react</p>
          <div className="flex gap-1">
          <Dialog>
          <DialogTrigger asChild>
            <SquarePen className="cursor-pointer" size={16}/>
          </DialogTrigger>

          <DialogContent>

            <DialogHeader>
              <DialogTitle>Editar tarefa</DialogTitle>
            </DialogHeader>

            <div className="flex gap-2">
              <Input placeholder="Editar tarefa"/>
              <Button className="cursor-pointer">Editar</Button>
            </div>

          </DialogContent>
        </Dialog>
            <Trash className="cursor-pointer" size={16}/>
          </div>
        </div>
      
      
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex gap-2 items-center">
        <ListCheck size={16} />
        <p className="text-sm">Tarefas concluidas: 3/3</p>
        </div>

          <AlertDialog>
  <AlertDialogTrigger asChild >
          <Button variant="outline" className="cursor-pointer text-sm h-7">
          <Trash size={15}/>
          Limpar atividades concluidas
          </Button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>

    <AlertDialogFooter>
      <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
      <AlertDialogAction className="cursor-pointer">Prosseguir</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
          </AlertDialog>
       </div>

      <div className="h-3 w-full bg-gray-100 rounded-md">
        <div className="h-full bg-blue-500 rounded-md" style={{ width: "50%" }}>
        </div>
      </div>

      <div className="flex justify-end items-center mt-2 gap-2">
        <Sigma />
        <p className="text-sm" >Tarefas no total</p>
      </div>


    </CardContent>


    </Card>

    </main>
   
  )
}

export default Home