<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <div id="app">
      <App></App>
  </div>
  @if(config('app.env') === 'production')
  <script src="{{ secure_asset('js/app.js') }}"></script>
  @elseif(config('app.env') === 'local')
  <script src="{{ asset('js/app.js') }}"></script>
  @endif
</body>
</html>
