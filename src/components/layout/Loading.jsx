function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">Carregando</p>
        </div>

        <div className="flex gap-1">
          <div
            className="w-2 h-6 bg-linear-to-t from-blue-600 to-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-6 bg-linear-to-t from-blue-600 to-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-6 bg-linear-to-t from-blue-600 to-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
