@extends('layouts.main')
@section('content')

<div class="container">
    <div class="card">
        <div class="row">
            <div class="col">
                <h5>Planos Disponíveis</h5>
                <hr>
            </div>
        </div>

        <form action="" method="post">
            <div class="row">
                <div class="col">
                    <!-- -->
                    @foreach($choices as $choice)
                    {{json_encode($choice['price'])}}
                    @endforeach
                </div>
            </div>
        </form>
    </div>
</div>

@endsection