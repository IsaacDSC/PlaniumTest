@extends('layouts.main')
@section('content')
<div class="containter">
    <div class="card">
        <div class="container mt-5" id="TITLE">

            <h2 class="text-center"><strong>+</strong> Saúde Integral <strong>+</strong></h2>

        </div>
        <div class="card-body">
            <div class="container mt-5">
                <div class="row ">
                    @foreach($plans as $plan)
                    <div class="modal" tabindex="-1" id="PLAN{{json_encode($plan['codigo'])}}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">{{json_encode($plan['nome'])}}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form action="{{url('/price/plan')}}" method="POST">
                                @csrf
                                    <div class="modal-body">
                                        <div class="container">
                                            <h5 class="text-center">Formulário</h5>
                                            <hr>
                                            <div class="row">
                                                <input type="hidden" name="codigo" value="{{json_encode($plan['codigo'])}}">
                                                <div class="col">
                                                    <label for="">Informe sua Idade</label>
                                                    <input type="number" name="idade" id="" class="form-control">
                                                </div>
                                                <div class="col">
                                                    <label for="">Numero de Dependentes</label>
                                                    <input type="number" name="dependentes" id="" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="container">
                                            <button type="submit" class="btn btn-primary col-12">Verificar valor</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 mt-1 mb-1">
                        <div class="card" id="PLANS">
                            <img src="images/onePeople.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <hr class="HR">
                                <h4 class="text-center text-light"><strong> {{json_encode($plan['nome'])}}</strong></h4>
                                <hr class="HR">
                                <p class="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="row">
                                    <div class="col">
                                        <button class="btn btn-info text-light col-12" style="border-radius: 0;" data-bs-toggle="modal" data-bs-target="#PLAN{{json_encode($plan['codigo'])}}">Saber Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @endforeach

                </div>
            </div>
        </div>
    </div>
</div>

@endsection